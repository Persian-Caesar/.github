import fs from "fs";

function readme(repositorise) {
    return `## Hi there 👋
This is **Persian Caesar** team, a team for supporting developers.

<h1 align="center">Repositories</h1>
<div align="center">

${repositorise}                

</div>

---

<h1 align="center">Coding Activity</h1>

<div align="center">
  <div align="center">
    <div>
      <a href="https://github.com/Persian-Caesar?tab=followers" target="_blank">
         <img src="https://img.shields.io/github/followers/Persian-Caesar?logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/Persian-Caesar/" target="_blank">
         <img src="https://img.shields.io/github/stars/Persian-Caesar?logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/Persian-Caesar/" target="_blank">
         <img src="https://komarev.com/ghpvc/?username=Persian-Caesar&logo=github&style=for-the-badge">
      </a>
    </div>
  </div>
</div>

With ownership from [@Sobhan-SRZA](https://github.com/Sobhan-SRZA)</br>
[**Development server**](https://dsc.gg/persian-caesar) and [**Community server**](https://dsc.gg/pc-club)

---

# **Contact us in**
<div align="center">
  <a href="https://srza.ir" target="_blank">
   <img align="left" src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/social.png" alt="Sobhan-SRZA social" width=400px>
  </a>

  <a href="https://t.me/d_opa_mine" target="_blank">
   <img alt="Telegram"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/telegram-ch.svg"
    height="30" />
  </a>

  <a href="https://t.me/Sobhan_SRZA" target="_blank">
   <img alt="Telegram"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/telegram-ac.svg"
    height="30" />
  </a>

  <a href="https://www.instagram.com/mr.sinre?igsh=cWk1aHdhaGRnOGg%3D&utm_source=qr" target="_blank">
   <img alt="Instagram"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/instagram.svg"
    height="30" />
  </a>

  <a href="https://www.twitch.tv/sobhan_srza" target="_blank">
   <img alt="Twitch"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/twitch.svg"
    height="30" />
  </a>

  <a href="https://www.youtube.com/@mr_sinre?app=desktop&sub_confirmation=1" target="_blank">
   <img alt="YouTube"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/youtube.svg"
    height="30" />
  </a>
  
  <a href="https://github.com/Sobhan-SRZA" target="_blank">
   <img alt="Github"
    src="https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/github.svg"
    height="30" />
  </a>
  
  <p align="left">
   <a href="https://discord.gg/xh2S2h67UW" target="_blank">
    <img src="https://discord.com/api/guilds/1054814674979409940/widget.png?style=banner2" alt="pc-development.png">
   </a>
  </p>

  <p align="right">
   <a href="https://discord.gg/54zDNTAymF" target="_blank">
    <img src="https://discord.com/api/guilds/1181764925874507836/widget.png?style=banner2" alt="pc-club.png">
   </a>
  </p>

  <div align="center">
   <a href="https://discord.com/users/865630940361785345" target="_blank">
    <img alt="My Discord Account" src="https://discord.c99.nl/widget/theme-1/865630940361785345.png" />
   </a>
    <a href="https://discord.com/users/986314682547716117" target="_blank" align="right">
    <img alt="Team Discord Account" src="https://discord.c99.nl/widget/theme-1/986314682547716117.png" />
   </a>
  </div>

 </div>

</div>`;
}

async function generateMarkdownTable(repos, imagesPath) {
    const table = [];
    table.push("| 🔢 | 🗃 Projects | 📖 Describe | 📡 Status | 🔐 Access | 🌎 Language | ⚙️ Technology | ⭐ Stars | 🖨 Forks |");
    table.push("| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |");

    let count = 0;
    repos?.forEach((repo) => {
        const access = repo.private ? '🔒 Private' : '🌐 Public';
        const langBadges = repo.languages
            ? repo.languages.map(a => {
                const language = encodeURIComponent(a);
                return `![Used ${language}](${imagesPath}/${language.toLowerCase()}.svg)`
            }).join(" ")
            : '`none`';

        const techBadges = repo.technologies
            ? repo.technologies.map(a => {
                const technology = encodeURIComponent(a);
                return `![Used ${technology}](${imagesPath}/${technology.toLowerCase()}.svg)`
            }).join(" ")
            : '`none`';

        const starsBadge = repo.private ? '`none`' : `![Stars](https://img.shields.io/github/stars/${repo.organization ?? repo.owner}/${repo.name}?style=flat-square)`;
        const forksBadge = repo.private ? '`none`' : `![Forks](https://img.shields.io/github/forks/${repo.organization ?? repo.owner}/${repo.name}?style=flat-square)`;

        table.push(`| ${++count} | [${repo.name}](${repo.url}) | \`${repo.description}\` | **${repo.status}** | **${access}** | ${langBadges} | ${techBadges} | ${starsBadge} | ${forksBadge} |`);
    });

    return table.join("\n");
}

async function main() {
    try {
        const check_projects = async () => {
            const fetched = await fetch("https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/projects.json")

            return await fetched.json()
        }

        const repos = await check_projects();
        const team_repos = repos.filter(a => a.organization === "Persian-Caesar");
        console.log(`check repositorise size: ${repos.length}`);

        const markdownTable = await generateMarkdownTable(team_repos, "https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/4c697854a80e5e99324c04eb000f7d2cd53737ae/images/");
        fs.writeFileSync('profile/README.md', readme(markdownTable));
        console.log("\n");
        console.log(`loaded repositorise size: ${team_repos.length}`);
        console.log('profile/README.md has successfully created.');
    } catch (error) {
        console.error('get an error:', error);
    }
}

void main();
/**
 * @copyright
 * Code by Sobhan-SRZA (mr.sinre) | https://github.com/Sobhan-SRZA
 * Developed for Persian Caesar | https://github.com/Persian-Caesar | https://dsc.gg/persian-caesar
 *
 * If you encounter any issues or need assistance with this code,
 * please make sure to credit "Persian Caesar" in your documentation or communications.
 */