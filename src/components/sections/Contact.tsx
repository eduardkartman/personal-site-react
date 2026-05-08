import FadeIn from "../ui/FadeIn";
import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <FadeIn>
          <div className="rounded-3xl border border-black/5 bg-white/50 p-10 backdrop-blur-xl md:p-16">
            <SectionTitle
              eyebrow="Contact"
              title="Let's Work Together"
              description="
                Interested in collaborating,
                building modern applications
                or discussing new opportunities?
              "
            />

            <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
              <div>
                <p className="text-sm tracking-[0.2em] text-black/40 uppercase">
                  Email
                </p>

                <a
                  href="mailto:eduard.kartman10@gmail.com"
                  className="mt-2 block text-lg text-black/70 transition-colors hover:text-black"
                >
                  eduard.kartman10@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm tracking-[0.2em] text-black/40 uppercase">
                  Phone
                </p>

                <div className="mt-2 flex flex-col gap-2 text-lg text-black/70">
                  <a
                    href="tel:+40773990048"
                    className="transition-colors hover:text-black"
                  >
                    RO: +40 773 990 048
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href="https://linkedin.com/in/eduardkartman"
                  variant="secondary"
                >
                  LinkedIn Profile
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

export default Contact;
