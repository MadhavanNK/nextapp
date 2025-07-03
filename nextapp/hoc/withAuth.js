 "use client";

const { auth } = require("@/firebase");
const { onAuthStateChanged } = require("firebase/auth");
const { useRouter } = require("next/navigation");
const { useState, useEffect } = require("react");

const withAuth = (Component) => {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/");
        } else {
           setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading){
        return  <p>loading....</p>
    }
      return <Component {...props}/>
    }
}

export default withAuth;