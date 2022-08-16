import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
    return (
        <div className="posts">
            <Post img="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202012/MIT-Coding-Brain-01-press_0.jpg?itok=JKoUflf8" />
            <Post img="https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg?auto=webp&quality=95&crop=16:9&width=675" />
            <Post img="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.png"/>
            <Post img="https://media.istockphoto.com/photos/dots-and-lines-connection-on-abstract-technology-background-picture-id1176737314?k=20&m=1176737314&s=612x612&w=0&h=kZCX69zovQOyQh0et9NoHkYOr-Q1tYc8SYm4J20NkMw="/>
            <Post img="https://raw.githubusercontent.com/TeamCodeStream/codestream-guide/develop/docs/src/assets/images/animated/DiscussCode1-VSC.gif"/>
        </div>
    );
}
