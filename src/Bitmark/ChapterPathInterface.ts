/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { ResourceTypeEnum } from "./ResourceTypeEnum";

interface ChapterPathInterface {
    title: string;
    level: number;
    item?: string;
    ref?: number;
    toc?: boolean;
    isFree?: boolean;
    isPreview?: boolean;
    isProgress?: boolean;
    resourceType?: ResourceTypeEnum;
    isGenericTitle?: boolean;
}

export { ChapterPathInterface };