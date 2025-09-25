export type * from './__types';

import { TypographyBase } from "./TypographyBase";
import {
    DisplayTitleText,
    DisplaySubtitleText,
    PageTitleText,
    PageSubtitleText,
    HeadingTitleText,
    HeadingSubtitleText,
    SectionTitleText,
    SectionSubtitleText,
    ContentTitleText,
    ContentSubtitleText,
    ContentBodyText,
    ContentLinkText,
    ContentMetaText
} from "./components";


export const Typography = {
    Base: TypographyBase,
    Display: {
        Title: DisplayTitleText,
        Subtitle: DisplaySubtitleText,
    },
    Page: {
        Title: PageTitleText,
        Subtitle: PageSubtitleText,
    },
    Heading: {
        Title: HeadingTitleText,
        Subtitle: HeadingSubtitleText,
    },
    Section: {
        Title: SectionTitleText,
        Subtitle: SectionSubtitleText,
    },
    Content: {
        Title: ContentTitleText,
        Subtitle: ContentSubtitleText,
        Body: ContentBodyText,
        Meta: ContentMetaText,
        Link: ContentLinkText
    },

}