import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { ShieldCheck, Stethoscope, Lock, CheckCircle } from "lucide-react";

export default function TrustStrip() {
  return (
    <Section variant="white">
      <div className="border-y border-borderSoft">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-center text-sm text-textMuted">
            <div className="flex flex-col items-center gap-3">
              <Stethoscope className="h-6 w-6 text-primary/70" />
              <p className="font-medium text-textPrimary">
                UK-Registered Doctors
              </p>
              <p className="leading-relaxed">Clinical review on every test</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary/70" />
              <p className="font-medium text-textPrimary">CQC-Aligned Care</p>
              <p className="leading-relaxed">Governance & safety standards</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Lock className="h-6 w-6 text-primary/70" />
              <p className="font-medium text-textPrimary">
                Confidential & Secure
              </p>
              <p className="leading-relaxed">GDPR-compliant data handling</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary/70" />
              <p className="font-medium text-textPrimary">
                No Unnecessary Testing
              </p>
              <p className="leading-relaxed">
                Ethical, patient-first screening
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
