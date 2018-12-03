import { SLDStyles } from './SLDStyles';
import { StylesConfig, UserStyleItem, RuleItem } from './def';
export default class LineStyles extends SLDStyles {
    protected getUserStyles(stylesCfg: StylesConfig): UserStyleItem[];
    protected getRule(stylesCfg: StylesConfig): RuleItem[];
}
