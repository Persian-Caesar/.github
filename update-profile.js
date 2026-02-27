import fs from "fs";

function readme(repositorise) {
    return `
<p align="center">
  <img src="https://github.com/Persian-Caesar/persian-caesar.github.io/raw/refs/heads/main/assets/favicon.ico" alt="Persian Caesar Logo" width="220"/>
  <br><br>
  <h1>Persian Caesar Team</h1>
  <h3>قدرت تکنولوژی ایرانی — برای جهان</h3>
  <p>
    <strong>A passionate Iranian development team</strong> creating high-quality Discord bots, tools, APIs, and web solutions since 2021.<br>
    From advanced ticket systems and music players to arbitrage monitors and custom enterprise bots.
  </p>

  <p>
    <a href="https://github.com/Persian-Caesar"><img src="https://img.shields.io/github/followers/Persian-Caesar?color=FFD700&logo=github&style=for-the-badge" alt="Followers"></a>
    <a href="https://github.com/Persian-Caesar?tab=repositories"><img src="https://img.shields.io/badge/Repositories-10+-6B7280?style=for-the-badge&logo=github" alt="Repos"></a>
    <a href="https://dsc.gg/persian-caesar"><img src="https://img.shields.io/discord/1054814674979409940?color=5865F2&logo=discord&logoColor=white&style=for-the-badge" alt="Development Server"></a>
    <a href="https://dsc.gg/pc-club"><img src="https://img.shields.io/discord/1181764925874507836?color=22C55E&logo=discord&logoColor=white&style=for-the-badge" alt="Community Server"></a>
  </p>
</p>

## 🌟 About Us

Founded in 2021 by **Sobhan-SRZA (mr.sinre)**, Persian Caesar began as a vision to build powerful, Iranian-rooted open-source tools — inspired by resilience, innovation, and community.

We specialize in:

- **Discord Bots** — moderation • tickets • music • radio • fun • utilities  
- **Custom Client Projects** — private enterprise-grade solutions  
- **Packages & APIs** — modular, type-safe libraries (TypeScript + JavaScript)  
- **Web & Full-Stack** — modern frontends, dashboards, online shops  

> **Core Values**  
> Quality • Stability • Persian-first documentation • Developer support • Open-source spirit

## 🚀 Our Public Projects

Here are our proudly open-source repositories (real-time stats as of February 2026):

${repositorise}

> Many more **private / customer projects** exist (25+), including premium ticket systems, music panels, funding rate arbitrage monitors, Telegram notifiers, file uploaders, MTA:SA status bots, and full-stack shops.

## 🛠️ Tech Stack We Master

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TS"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node"/>
  <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js"/>
  <img src="https://img.shields.io/badge/Telegram%20Bot-5865F2?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Bot"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native"/>
  <img src="https://img.shields.io/badge/Next%20JS-black?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDE1IDE1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC41IDQuNUw0LjkwNTM0IDQuMjA3MjVDNC43NzgzNiA0LjAzMTQ0IDQuNTUyNTIgMy45NTc1MyA0LjM0NjE3IDQuMDI0MjVDNC4xMzk4MSA0LjA5MDk4IDQgNC4yODMxMyA0IDQuNUg0LjVaTTcuNSAxNEMzLjkxMDE1IDE0IDEgMTEuMDg5OSAxIDcuNUgwQzAgMTEuNjQyMSAzLjM1Nzg2IDE1IDcuNSAxNVYxNFpNMTQgNy41QzE0IDExLjA4OTkgMTEuMDg5OSAxNCA3LjUgMTRWMTVDMTEuNjQyMSAxNSAxNSAxMS42NDIxIDE1IDcuNUgxNFpNNy41IDFDMTEuMDg5OSAxIDE0IDMuOTEwMTUgMTQgNy41SDE1QzE1IDMuMzU3ODYgMTEuNjQyMSAwIDcuNSAwVjFaTTcuNSAwQzMuMzU3ODYgMCAwIDMuMzU3ODYgMCA3LjVIMUMxIDMuOTEwMTUgMy45MTAxNSAxIDcuNSAxVjBaTTUgMTJWNC41SDRWMTJINVpNNC4wOTQ2NiA0Ljc5Mjc1TDEwLjU5NDcgMTMuNzkyN0wxMS40MDUzIDEzLjIwNzNMNC45MDUzNCA0LjIwNzI1TDQuMDk0NjYgNC43OTI3NVpNMTAgNFYxMEgxMVY0SDEwWiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=&logoColor=white" alt="Next"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
</div>

## 📞 Connect With Us

<div align="center">
  <a href="https://srza.ir"><img src="https://img.shields.io/badge/Website-srza.ir-26A69A?style=for-the-badge&logo=google-chrome" alt="Website"></a>
  <a href="https://persiancaesar.ir/"><img src="https://img.shields.io/badge/Website-persiancaesar.ir-FFD700?style=for-the-badge&logo=google-chrome" alt="Website"></a>
  <a href="https://github.com/Sobhan-SRZA"><img src="https://img.shields.io/badge/GitHub-Sobhan--SRZA-181717?style=for-the-badge&logo=github" alt="Sobhan-SRZA"></a>
  <a href="https://discord.gg/xh2S2h67UW"><img src="https://img.shields.io/badge/Development%20Server-Invite-5865F2?style=for-the-badge&logo=discord" alt="Dev Server"></a>
  <a href="https://discord.gg/54zDNTAymF"><img src="https://img.shields.io/badge/Community%20Server-Invite-22C55E?style=for-the-badge&logo=discord" alt="PC Club"></a>
  <a href="https://t.me/Sobhan_SRZA"><img src="https://img.shields.io/badge/Telegram-@Sobhan_SRZA-26A69A?style=for-the-badge&logo=telegram" alt="Telegram"></a>
</div>

<br>

<p align="center">
  <strong>Built with ❤️ by Persian Caesar Team</strong><br>
  © 2021–2026 • All Rights Reserved
</p>

<p align="center">
  <a href="https://github.com/Persian-Caesar/persian-caesar.github.io">This profile is open-source → Star & contribute!</a>
</p>
    `;
}

async function generateMarkdownTable(repos, imagesPath) {
    const table = [];
    table.push("| # | Repository | Description | Language | ⭐ Stars | 🍴 Forks | Status |");
    table.push("|---|------------|-------------|----------|----------|----------|-------------|");

    let count = 0;
    repos?.forEach((repo) => {
        const access = repo.private ? "Private" : "Public";
        const status = repo.status === "✅ Done" ? "Finished" : "In Development";
        const langBadges = repo.languages
            ? repo.languages.map(a => {
                const language = encodeURIComponent(a);
                return `![Used ${language}](${imagesPath}/${language.toLowerCase().replaceAll(" ", "")}.svg)`
            }).join(" ")
            : "`none`";

        const starsBadge = repo.private ? "`none`" : `![Stars](https://img.shields.io/github/stars/${repo.organization ?? repo.owner}/${repo.name}?style=flat-square)`;
        const forksBadge = repo.private ? "`none`" : `![Forks](https://img.shields.io/github/forks/${repo.organization ?? repo.owner}/${repo.name}?style=flat-square)`;

        table.push(`| ${++count} | [${repo.name}](${repo.url}) | \`${(repo.description_en || repo.description)}\` | ${langBadges} | ${starsBadge} | ${forksBadge} | **${access} - ${status}** |`);
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

        const markdownTable = await generateMarkdownTable(team_repos, "https://raw.githubusercontent.com/Sobhan-SRZA/Sobhan-SRZA/refs/heads/main/images/");
        fs.writeFileSync("profile/README.md", readme(markdownTable));
        console.log("\n");
        console.log(`loaded repositorise size: ${team_repos.length}`);
        console.log("profile/README.md has successfully created.");
    }

    catch (error) {
        console.error("get an error:", error);
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
