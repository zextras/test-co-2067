"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSettings = void 0;
const default_settings_1 = __importDefault(require("./default-settings"));
/**
 *
 * @param customSettings
 */
// TODO remove the any as soon as SHELL-66 will be completed
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const generateSettings = (customSettings) => ({
    attrs: {
        ...default_settings_1.default.attrs,
        ...customSettings?.attrs
    },
    prefs: {
        ...default_settings_1.default.prefs,
        ...customSettings?.prefs
    },
    props: [...(customSettings?.props ?? default_settings_1.default.props)]
});
exports.generateSettings = generateSettings;
//# sourceMappingURL=settings-generator.js.map