import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="rounded bg-black px-4 py-2 text-white"
      >
        Sign in with Google
      </button>
    </form>
  );
}