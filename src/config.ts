export const siteConfig: SiteConfig = {
    title: "欢迎来到我的博客!!!",
    language: "zh",
    description: "Clark's personal blog. Powered by Astro Blog Theme Blur.",
    keywords: "Clark, blog, personal blog, Astro, Astro Blog Theme Blur",
    author: "Clark",
    avatar: "/JianShi.png",
    favicon: "/JianShi.png",
    site: "https://Clark.top",

    page_size: 10,
}

export const navBarConfig: NavBarConfig = {
    links: [
        {
            name: 'Projects',
            url: '/projects'
        },
        {
            name: 'Links',
            url: '/links'
        },
        {
            name: 'About',
            url: '/about'
        }
    ]
}

export const socialLinks: SocialLink[] = [
    // https://icon-sets.iconify.design/material-symbols/
    {
        label: 'GitHub',
        icon: 'mdi-github',
        url: 'https://github.com/Clark6'
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
