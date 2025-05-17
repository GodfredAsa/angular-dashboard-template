export interface NavElement{
  title: string,
  data: MainNavData[]
}


export interface MainNavData{
    icon: string,
    element: string,
    to: string,
    news: string

}
