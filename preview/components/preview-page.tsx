import { Layout } from "@ui/index"


interface Props {
    children?: React.ReactNode
    title?: string
}

export const PreviewPage = (props: Props) => {
    return <div className="flex flex-col min-h-screen py-8 gap-16">
        <header >
            <Layout.Section>
                <h1 className="text-2xl font-semibold">{props.title}</h1>
            </Layout.Section>
        </header>
        <main className='flex-1 flex flex-col gap-8'>
            {props.children}
        </main>
        <footer >
            <Layout.Section>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptatibus perferendis molestiae architecto tempora quasi iure reprehenderit, exercitationem necessitatibus minus magni, hic similique amet vero, natus ipsa eaque blanditiis quam.</p>
            </Layout.Section>
        </footer>
    </div>
}
