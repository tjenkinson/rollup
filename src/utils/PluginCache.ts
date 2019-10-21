import { PluginCache, SerializablePluginCache } from '../rollup/types';
import { error } from './error';
import { ANONYMOUS_PLUGIN_PREFIX } from './pluginConstants';

export function createPluginCache(cache: SerializablePluginCache): PluginCache {
	return {
		has(id: string) {
			const item = cache[id];
			if (!item) return false;
			item[0] = 0;
			return true;
		},
		get(id: string) {
			const item = cache[id];
			if (!item) return undefined;
			item[0] = 0;
			return item[1];
		},
		set(id: string, value: any) {
			cache[id] = [0, value];
		},
		delete(id: string) {
			return delete cache[id];
		}
	};
}

export function getTrackedPluginCache(pluginCache: PluginCache) {
	const trackedCache = {
		cache: {
			has(id: string) {
				trackedCache.used = true;
				return pluginCache.has(id);
			},
			get(id: string) {
				trackedCache.used = true;
				return pluginCache.get(id);
			},
			set(id: string, value: any) {
				trackedCache.used = true;
				return pluginCache.set(id, value);
			},
			delete(id: string) {
				trackedCache.used = true;
				return pluginCache.delete(id);
			}
		},
		used: false
	};
	return trackedCache;
}

export const NO_CACHE: PluginCache = {
	has() {
		return false;
	},
	get() {
		return undefined as any;
	},
	set() {},
	delete() {
		return false;
	}
};

function uncacheablePluginError(pluginName: string) {
	if (pluginName.startsWith(ANONYMOUS_PLUGIN_PREFIX))
		error({
			code: 'ANONYMOUS_PLUGIN_CACHE',
			message:
				'A plugin is trying to use the Rollup cache but is not declaring a plugin name or cacheKey.'
		});
	else
		error({
			code: 'DUPLICATE_PLUGIN_NAME',
			message: `The plugin name ${pluginName} is being used twice in the same build. Plugin names must be distinct or provide a cacheKey (please post an issue to the plugin if you are a plugin user).`
		});
}

export function getCacheForUncacheablePlugin(pluginName: string): PluginCache {
	return {
		has() {
			uncacheablePluginError(pluginName);
			return false;
		},
		get() {
			uncacheablePluginError(pluginName);
			return undefined as any;
		},
		set() {
			uncacheablePluginError(pluginName);
		},
		delete() {
			uncacheablePluginError(pluginName);
			return false;
		}
	};
}
