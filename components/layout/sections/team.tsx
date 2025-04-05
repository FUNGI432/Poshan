import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/aman-war.jpg",
      firstName: "Aman",
      lastName: "Gangwar",
      positions: [
        "Student at Bennet University, Greater Noida",
        "UI/UX Developer",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/aman-gangwar-300822292/",
        },
        {
          name: "Github",
          url: "https://github.com/ammaarKhan13",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQFziQovnkV2Cg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725908329526?e=1749081600&v=beta&t=HrNPH_K-uq8oIyNE4W7T1mc6TlS1r4C7VPauVZJu1rI",
      firstName: "Divyansh",
      lastName: "Vishwakarma",
      positions: [
        "Student at Bennet University, Greater Noida",
        "Web Developer",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/deevee47",
        },
        {
          name: "Github",
          url: "https://github.com/deevee47",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQF0exv-N38iAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729655136649?e=1749081600&v=beta&t=RjqdCFPXpkZljlK_bDW8unS0Mbk8WXpm3vLUTMFoliM",
      firstName: "Shantanu",
      lastName: "Kumar  ",
      positions: [
        "Student at Bennet University, Greater Noida",
        "Web Developer",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/shantanu-kumar-s34/",
        },
        {
          name: "Github",
          url: "https://github.com/shantanukumar22",
        },
      ],
    },
    {
      imageUrl:
      "https://media.licdn.com/dms/image/v2/D4E03AQEBCNOtnVpkpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726265779939?e=1749081600&v=beta&t=Fd5URlURcoQmuiywNh7rPfEHHNT4N9m1jmapiIC4DFo",
      firstName: "Kartik",
      lastName: "Gupta",
      positions: [
        "Student at Bennet University, Greater Noida",
        "Web Developer",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/kartik-gupta-038473322/",
        },
        {
          name: "Github",
          url: "https://github.com/deevee47",
        },
      ],
    },
    {
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D5603AQFvAvI9SRKeBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712674568368?e=1749081600&v=beta&t=EGKbVEHvmXOF7fqp5CCWG-YhrofxYJ8MREJ1kz1MZUw",
      firstName: "Akshat",
      lastName: "Khemka",
      positions: [
        "Student at Bennet University, Greater Noida",
        "Web Developer",
      ],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/khemka-akshat/",
        },
        {
          name: "Github",
          url: "https://github.com/KhemkaAkshat",
        },
      ],
    },
  ];
  
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="center container py-24 sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-lg text-primary font-medium tracking-wider">
            Our Team
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold">
            The Minds Behind Poshan
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {teamList.map(
            (
              { imageUrl, firstName, lastName, positions, socialNetworks },
              index
            ) => (
              <Card
                key={index}
                className="group bg-muted/50 dark:bg-card border-border/50 hover:border-border/100 transition-colors duration-200 max-w-sm"
              >
                <CardHeader className="p-0">
                  <div className="h-[200px] overflow-hidden">
                    {" "}
                    {/* Adjusted height here */}
                    <Image
                      src={imageUrl}
                      alt={`${firstName} ${lastName}`}
                      width={300} // Reduced width
                      height={200} // Reduced height
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      priority={index < 3}
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-xl">
                      {firstName}
                      <span className="text-primary ml-2">{lastName}</span>
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0">
                  <div className="space-y-1">
                    {positions.map((position, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {position}
                        {idx < positions.length - 1 && <span>,</span>}
                      </p>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex items-center gap-4">
                    {socialNetworks.map(({ name, url }, idx) => (
                      <Link
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                        aria-label={`${firstName}'s ${name}`}
                      >
                        {socialIcon(name)}
                      </Link>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};
