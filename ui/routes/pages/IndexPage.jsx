import { router } from "../router";

export default function IndexPage() {
    return (
    <div>Index
        <button onClick={() => router.navigate({ to: "/userInfo" })}>Go to User Info</button>
    </div>
    );
}