import Button from '@/components/button';
import Container from "@/components/container";
import LogoLink from '@/components/logo-link';
import MadeByAristoclick from '@/components/made-by-aristoclick';
import { CONTACT_EMAIL, CONTACT_EMAIL_LINK, CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/helpers/contacts';

export default function Footer() {

    return (
        <Container as="footer"
            className="flex flex-col items-center"
        >
            <div className="w-full flex flex-col items-center gap-14">
                <LogoLink className="w-[143px]" />

                <p className="text-b2 text-center">
                    <strong>
                        Institut psychologické a personální analýzy
                    </strong>
                    <br /><br />
                    Váš partner pro osobnÍ a profesní růst od roku 1993
                </p>

                <div className="w-full max-w-[712px] flex items-center text-center">
                    <div className="flex-1">
                        <a href={CONTACT_EMAIL_LINK} className="hover:underline">
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                    <div className="flex-1">
                        <a href={CONTACT_PHONE_LINK} className="hover:underline">
                            {CONTACT_PHONE}
                        </a>
                    </div>
                </div>

                <Button theme="secondary">
                    Chci zjistit více o institutu a jeho aktivitách
                </Button>
            </div>

            <div className="w-full border-t border-blue-400 mt-14 pt-14 pb-18 text-center">
                <MadeByAristoclick />
            </div>
        </Container>
    )
}