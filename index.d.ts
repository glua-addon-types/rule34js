declare type rule34jsoptions = {
    tags: string[],
    limit: number,
    pid: number
}
declare function RULE34JS(this: void, options: rule34jsoptions, succ: (this: void, posts: table) => void, fail?: Function): void
declare module "autorun/rule34js.lua" {
	export = function RULE34JS(this: void, options: rule34jsoptions, succ: (this: void, posts: table) => void, fail?: Function): void
}
