"use strict";
/*
 * SPDX-FileCopyrightText: 2025 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/breadcrumbs
__exportStar(require("./components/breadcrumbs/static-breadcrumbs"), exports);
// components/sidebar
__exportStar(require("./components/sidebar/sidebar-accordion-mui"), exports);
// components/modals
__exportStar(require("./components/modals/modal-footer"), exports);
__exportStar(require("./components/modals/modal-header"), exports);
__exportStar(require("./components/modals/folder-initialization-error-modal"), exports);
// components/select/folders
__exportStar(require("./components/select/folders/folders-accordion"), exports);
__exportStar(require("./components/select/folders/flat-folder"), exports);
__exportStar(require("./components/select/folders/flat-folders"), exports);
__exportStar(require("./components/select/folders/folder-accordions-custom-component"), exports);
__exportStar(require("./components/select/folders/folder-selector"), exports);
__exportStar(require("./components/select/folders/flat-root"), exports);
__exportStar(require("./components/select/folders/status-icon"), exports);
__exportStar(require("./components/select/folders/hooks"), exports);
__exportStar(require("./components/select/folders/utils"), exports);
// components/select
__exportStar(require("./components/select/select-label-factory"), exports);
__exportStar(require("./components/select/color-select"), exports);
__exportStar(require("./components/select/folders-selector"), exports);
// components/list
__exportStar(require("./components/list/list-item"), exports);
__exportStar(require("./components/list/list"), exports);
// components/tags
__exportStar(require("./components/tags/delete-tag-modal"), exports);
// hooks
__exportStar(require("./hooks/use-initialize-folders"), exports);
__exportStar(require("./hooks/use-update-view"), exports);
__exportStar(require("./hooks/use-initialize-tags"), exports);
// utils
__exportStar(require("./utils/utils"), exports);
__exportStar(require("./utils/index"), exports);
__exportStar(require("./utils/clipboard"), exports);
__exportStar(require("./utils/get-prefs"), exports);
__exportStar(require("./utils/use-prefs"), exports);
// helpers
__exportStar(require("./helpers/errors"), exports);
__exportStar(require("./helpers/email-parser"), exports);
__exportStar(require("./helpers/api-wrapper"), exports);
__exportStar(require("./helpers/folders"), exports);
__exportStar(require("./helpers/identities"), exports);
__exportStar(require("./helpers/search"), exports);
__exportStar(require("./helpers/use-history-navigation"), exports);
// integrations
__exportStar(require("./integrations/hooks"), exports);
__exportStar(require("./integrations/constants"), exports);
__exportStar(require("./integrations/default-contact-input"), exports);
__exportStar(require("./integrations/search/use-run-search"), exports);
__exportStar(require("./integrations/types"), exports);
// soap
__exportStar(require("./soap/errors/generic-soap-api-error"), exports);
__exportStar(require("./soap/errors/soap-api-error"), exports);
__exportStar(require("./soap/no-op"), exports);
__exportStar(require("./soap/get-share-info"), exports);
__exportStar(require("./soap/get-folder"), exports);
__exportStar(require("./soap/tags"), exports);
// store/zustand/folder
__exportStar(require("./store/zustand/folder/hooks"), exports);
__exportStar(require("./store/zustand/folder/utils"), exports);
__exportStar(require("./store/zustand/folder/store"), exports);
// store/zustand/tags
__exportStar(require("./store/zustand/tags/hooks"), exports);
__exportStar(require("./store/zustand/tags/store"), exports);
__exportStar(require("./store/zustand/tags/index"), exports);
// constants
__exportStar(require("./constants/folders"), exports);
__exportStar(require("./constants/utils/index"), exports);
__exportStar(require("./constants/participants"), exports);
__exportStar(require("./constants/search"), exports);
// theme
__exportStar(require("./theme/theme-mui"), exports);
__exportStar(require("./theme/theme"), exports);
// worker
__exportStar(require("./worker/folder"), exports);
__exportStar(require("./worker/tags"), exports);
__exportStar(require("./worker/handle-message"), exports);
__exportStar(require("./worker/utils"), exports);
__exportStar(require("./worker"), exports);
// types
__exportStar(require("./types"), exports);
__exportStar(require("./types/actions"), exports);
__exportStar(require("./types/folder"), exports);
__exportStar(require("./types/i18next"), exports);
__exportStar(require("./types/identities"), exports);
__exportStar(require("./types/modals"), exports);
__exportStar(require("./types/select"), exports);
__exportStar(require("./types/sidebar"), exports);
__exportStar(require("./types/soap"), exports);
__exportStar(require("./types/styled-components"), exports);
__exportStar(require("./types/tags"), exports);
__exportStar(require("./types/user-accounts"), exports);
__exportStar(require("./types/workers"), exports);
//# sourceMappingURL=index.js.map