export const siteConfig: SiteConfig = {
    title: "You are welcome to visit my blog",
    language: "zh",
    description: "Clark's personal blog. Powered by Astro Blog Theme Blur.",
    keywords: "Clark, blog, personal blog, Astro, Astro Blog Theme Blur",
    author: "Clark",
    avatar: "/save.webp",
    favicon: "/save.webp",
    site: "https://clark.xin",

    page_size: 10,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Projects',
            url: '/'
        },
        {
            name: 'Links',
            url: '/'
        },
        {
            name: 'My CV in English',
            url: '/'
        }
    ]
}

export const socialLinks: SocialLink[] = [
    // https://icon-sets.iconify.design/material-symbols/
    {
        label: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Falend1'
    },
    {
        label: 'Email',
        icon: 'material-symbols:mail-rounded',
        url: 'mailto:Clark@jaze.top'
    }
]

interface SiteConfig {
    title: string
    language: string
    description: string
    keywords: string
    author: string
    avatar: string
    favicon: string
    site: string

    page_size: number
    twikoo_uri?: string     // https://twikoo.js.org/
}

interface NavBarConfig {
    links: {
        name: string
        url: string
        target?: string
    }[]
}

interface SocialLink {
    label: string
    icon: string
    url: string
}
