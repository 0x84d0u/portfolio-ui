import { setTimeoutAsync } from "@helpers/utils";
import { LoginForm } from "@patterns/Authentication/LoginForm";
import { Layout, toast } from "@ui/index";



export default function Playground() {
    return <Layout.Stack divided className='gap-12'>

        {/* <TextUI.DisplayText description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'>
            Hi, I'm the boss today
        </TextUI.DisplayText>

        <TextUI.PageTitleText description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'>
            Dashboard
        </TextUI.PageTitleText>

        <TextUI.HeadingText description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'>
            Latest products
        </TextUI.HeadingText>

        <TextUI.TitleText description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'>
            Product name
        </TextUI.TitleText> */}


        <LoginForm 
            action={async(values) => {
                console.log({ values })
                await setTimeoutAsync(1);
                toast("Logged in successfully")
                return null
            }}
        />
        {/* <AuthForm
            title="Register"
            description="Login now and discover..."
            links={[
                { prompt: "New user?", children: "Sign up", href: '#' },
                { prompt: "Forgot password?", children: "Reset now", href: '#' },
            ]}
        /> */}


    </Layout.Stack>
}