import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Terms of agreement</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis unde at ipsum, recusandae porro commodi dolore, dolorum eum iure odit facilis totam eaque aliquam, deleniti fuga odio? Asperiores, quam quaerat.</p>
            <button onClick={() => navigate("/questions")}>I agree</button>
        </>
    )
}

export default Home;