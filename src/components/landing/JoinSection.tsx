import { WAITLIST, PLATFORM } from "@site/src/data/landing";
import { Arrow } from "./Icons";

export default function JoinSection() {
  return (
    <section id="join" className="cc-join" aria-labelledby="join-title">
      <div className="cc-shell cc-join-inner">
        <div>
          <p className="cc-eyebrow">TAKE THE NEXT STEP</p>
          <h2 id="join-title">Join the CyberCheck waitlist.</h2>
          <p id="join-purpose">
            Get updates on early access, pilot opportunities and future
            demonstrations of CyberCheck.
          </p>
          <p id="join-availability" className="cc-availability">
            Participation details are being finalised. Joining registers
            interest; it does not guarantee access or an assessment.
          </p>
          <p className="cc-registration-note">
            Register with your work email and organisation name, and acknowledge
            the form’s data-use purposes. Other profile questions are optional.
            Only the CyberCheck team can access your responses; the privacy
            notice is in the form.
          </p>
        </div>
        <div className="cc-join-actions">
          <p className="cc-join-form-note">
            Waitlist registration opens Google Forms.
          </p>
          <a
            className="cc-btn cc-btn-light"
            href={WAITLIST}
            aria-describedby="join-purpose join-availability"
          >
            Join the waitlist <Arrow />
          </a>
          <a href={PLATFORM}>
            Looking for the application? Visit the platform <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
