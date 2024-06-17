export const LandingStory = () => {
  return (
    <div className="py-[90px] px-[200px] flex flex-col gap-[90px] w-full">
      <section id="about" className="flex flex-col gap-4 ">
        <header>
          <h1 className="text-[32px] font-bold">About Us</h1>
        </header>
        <div id="description" className="text-2xl">
          <p>
            Welcome to <strong>TextMi</strong>, your efficient go-to app for seamless and secure
            communication. The goal of TextMi is to help you stay connected with
            loved ones.
          </p>
          <br />

          <p>
            Our mission is to provide a user-friendly platform that unites
            people, no matter the distance with an assurance of the best tiool
            at your fingertips.
          </p>
        </div>
      </section>
      <section id="features" className="flex flex-col gap-4">
        <header>
          <h1 className="text-[32px] font-bold">Features</h1>
        </header>
        <div className="px-8 text-2xl">
          <ul id="feature-items" className="list-disc flex flex-col gap-4">
            <li>
              Instant messaging: Quickly send and receive messages with
              real-time delivery notifications.
            </li>
            <li>
              End-to-End Encryption: Ensure your conversations are private and
              secure, accessible only to you and your recipient.
            </li>
            <li>
              Group Chats: Create group chats to stay connected with multiple
              friends, family members, or colleagues at once.
            </li>
            <li>
              Customizable profiles: Personalize your profile with a photo,
              status updates, and other details.
            </li>
            <li>
              Push notifications: Get notified instantly of new messages and
              calls, so you never miss a beat.
            </li>
            <li>
              Dark mode: Reduce eye strain and save battery life with dark mode.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
