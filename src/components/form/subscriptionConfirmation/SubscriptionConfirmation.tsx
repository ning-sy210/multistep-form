import SubscriptionConfirmationIcon from "/images/icon-thank-you.svg";

import "./SubscriptionConfirmation.scss";

const SubscriptionConfirmation = () => {
  return (
    <section className="form stack-hvc subscription-confirmation-form">
      <img
        src={SubscriptionConfirmationIcon}
        alt="subscription confirmation icon"
      />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default SubscriptionConfirmation;
