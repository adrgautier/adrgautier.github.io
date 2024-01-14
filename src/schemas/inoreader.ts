import {z} from "zod";
import {formatDistance, addDays, isFuture} from "date-fns";

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    if (isFuture(addDays(date, 1))) {
        return "today";
    }

    return formatDistance(date, now, {addSuffix: true});
}

const feedItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    url: z.string(),
    content_html: z.string(),
    date_published: z.string(),
    tags: z.array(z.string()).optional(),
    attachments: z.array(
        z.object({
            size_in_bytes: z.number(),
            mime_type: z.string(),
            url: z.string()
        })
    ).optional(),
}).transform((item) => ({
    ...item,
    date_formated: formatDate(item.date_published)
}));

export type FeedItem = z.infer<typeof feedItemSchema>;

export const feedSchema = z.object({
    version: z.string(),
    title: z.string(),
    home_page_url: z.string(),
    description: z.string(),
    feed_url: z.string(),
    "atom:link": z.array(z.object({rel: z.string()})),
    items: z.array(feedItemSchema)
})
