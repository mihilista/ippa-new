import Container from "@/components/container";
import LogoLink from "@/components/logo-link";
import MenuDesktop from "@/components/menu-desktop";


export default function Nav() {
    return (
        <nav className="bg-white/70 text-black fixed top-0 left-0 w-full z-50 backdrop-blur">
            <Container Element="div"
                       className="flex items-center justify-between py-6"
            >
                <LogoLink/>

                <MenuDesktop/>

                {/*<BurgerButton/>*/}
            </Container>
        </nav>
    )
}