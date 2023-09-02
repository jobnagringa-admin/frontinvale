import { UserCard } from "devlink/UserCard";
import { users } from "./data";

export default function Home() {
  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[1200px] h-full w-full">
        <h1 className="text-6xl font-semibold">Hello Frontinvale</h1>
        <p className="text-lg">
          this is a component that was fetched from webflow:
        </p>

        <div className="flex flex-wrap gap-4">
          {users.map((user, index) => (
            <div key={index} className="w-[250px]">
              <UserCard
                userCardThumbnail={user.userCardThumbnail}
                cardTitleText={user.cardTitleText}
                cardEmail={user.cardEmail}
                cardTag={user.cardTag}
                buttonSmallLink={user.buttonSmallLink}
                buttonLabelText={user.buttonLabelText}
                buttonSmallSecondaryLink={user.buttonSmallSecondaryLink}
                buttonLabelSecondaryText={user.buttonLabelSecondaryText}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
