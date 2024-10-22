/**
 * 左侧菜单栏
 * -------------------------------------------------------------------------- */
export function sidebar() {
    return {
        // 顶部导航栏一
        "/nav1/": [
            {
                text: "aaaa",
                base: "/nav1/aaaa/",
                items: [
                    {text: "test01", link: "test01.md"},
                    {text: "test02", link: "test02.md"},
                ],
                collapsed: false,
            },
            {
                text: "bbbb",
                base: "/nav1/bbbb/",
                items: [
                    {text: "test03", link: "test03.md"}
                ],
                collapsed: false,
            },
        ],
        // 顶部导航栏二
        "/nav2/": [
            {text: "test04", link: "/nav2/test04.md"},
            {text: "test05", link: "/nav2/test05.md"}
        ]
    };
}

/**
 * 顶部导航栏
 * -------------------------------------------------------------------------- */
export function nav() {
    return [
        {text: "首页", link: "/"},
        {
            text: "顶部导航栏一",
            link: "/nav1/aaaa/test01.md",
            activeMatch: "/nav1/"
        },
        {
            text: "顶部导航栏二",
            link: "/nav2/test04.md",
            activeMatch: "/nav2/",
        }
    ];
}

