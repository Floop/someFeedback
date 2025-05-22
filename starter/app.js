import { Hono } from "jsr:@hono/hono@4.6.5";
import { cors } from "jsr:@hono/hono@4.6.5/cors";

const app = new Hono();
app.use("/*", cors());

app.get("/feedbacks/1", async(c) => {
    const kv = await Deno.openKv();
    let count = await kv.get(["feedbacks",1]);
    count = count.value ? count.value : 0;
    return c.json({ count });
});

app.post("/feedbacks/1", async(c) => {
    const kv = await Deno.openKv();
    let count = await kv.get(["feedbacks",1]);
    count = count.value ? count.value : 0;
    count += 1;
    await kv.set(["feedbacks", 1], count);
    return c.json({ count });
});

app.get("/feedbacks/2", async(c) => {
    const kv = await Deno.openKv();
    let count = await kv.get(["feedbacks",2]);
    count = count.value ? count.value : 0;
    return c.json({ count });
});

app.post("/feedbacks/2", async(c) => {
    const kv = await Deno.openKv();
    let count = await kv.get(["feedbacks",2]);
    count = count.value ? count.value : 0;
    count += 1;
    await kv.set(["feedbacks", 2], count);
    return c.json({ count });
});

app.get("/feedbacks/3", async(c) => {
    const kv = await Deno.openKv();
    let count = await kv.get(["feedbacks",3]);
    count = count.value ? count.value : 0;
    return c.json({ count });
});

app.post("/feedbacks/3", async(c) => {
    const kv = await Deno.openKv();
    let count = await kv.get(["feedbacks",3]);
    count = count.value ? count.value : 0;
    count += 1;
    await kv.set(["feedbacks", 3], count);
    return c.json({ count });
});

export default app;
