"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSearchChipToString = void 0;
const search_1 = require("../constants/search");
const WHOLE_QUERY_REGEX = new RegExp(`^(?:(${Object.values(search_1.SEARCH_QUERY_PREFIXES).join('|')}):)?(.+)$`, 'im');
const QUOTED_TERM_REGEX = /^"([^"]+)"$/im;
const MULTIWORD_TERM_REGEX = /^(\S+\s+\S+.*)$/im;
const convertSearchChipToString = (chip) => {
    const chipString = chip.value || chip.label || '';
    const match = chipString.match(WHOLE_QUERY_REGEX);
    if (!match) {
        return chipString;
    }
    const prefixAndColon = match[1] ? `${match[1]}:` : '';
    const term = match[2].trim();
    const isQuoted = QUOTED_TERM_REGEX.test(term);
    const isMultiword = !isQuoted && MULTIWORD_TERM_REGEX.test(term);
    return isMultiword ? `${prefixAndColon}"${term}"` : `${prefixAndColon}${term}`;
};
exports.convertSearchChipToString = convertSearchChipToString;
//# sourceMappingURL=search.js.map