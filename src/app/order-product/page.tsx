"use client";
import {useRouter} from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/"); // to navigate
        // use router.back() to go to the previous page.
        // use router.forward() to do the opposite.
    };

    return <>
        <h1>Order product</h1>
        <button onClick={handleClick}>Place order</button>
    </>;
}
