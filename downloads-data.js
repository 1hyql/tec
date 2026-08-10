const downloadsData = {
// ========脚本工具========
  scripts: [
    {
      title: "termux-tools",
      desc: "Termux 官方维护的核心工具包，包含 pkg 包管理器、termux-change-repo 镜像源切换、termux-setup-storage 存储权限申请等基础脚本与程序。",
      icon: "📦",
      url: "https://github.com/termux/termux-tools"
      ,git: "git clone https://github.com/termux/termux-tools"
    },
    {
      title: "termux-api-package",
      desc: "封装调用 Termux:API 应用功能的脚本集合，支持通过命令行访问 Android 传感器、电池状态、剪贴板、相机、通讯录等系统硬件与接口。",
      icon: "📱",
      url: "https://github.com/termux/termux-api-package",
      git: "git clone https://github.com/termux/termux-api-package"
    },
    {
      title: "termux-styling",
      desc: "Termux 官方终端美化插件，支持在终端内长按切换字体与配色主题，需与主应用同签名安装。",
      icon: "🎨",
      url: "https://github.com/termux/termux-styling",
      git: "git clone https://github.com/termux/termux-styling"
    },
    {
      title: "termux-widget",
      desc: "在 Android 桌面添加 Termux 快捷命令小部件，支持前台执行 ~/.shortcuts/ 脚本与后台执行 ~/.shortcuts/tasks/ 任务。",
      icon: "🧩",
      url: "https://github.com/termux/termux-widget",
      git: "git clone https://github.com/termux/termux-widget"
    },
    {
      title: "termux-boot",
      desc: "Termux 开机自启插件，将脚本放入 ~/.termux/boot/ 目录即可在手机重启后自动运行，适合部署 SSH、后台服务等。",
      icon: "⏰",
      url: "https://github.com/termux/termux-boot",
      git: "git clone https://github.com/termux/termux-boot"
    },
    {
      title: "termux-float",
      desc: "将 Termux 终端以悬浮窗形式显示在其他应用之上，支持调整窗口大小与位置，随时呼出操作。",
      icon: "🪟",
      url: "https://github.com/termux/termux-float",
      git: "git clone https://github.com/termux/termux-float"
    },
    {
      title: "Termux ELF 清理工具",
      desc: "清理 Android ELF 文件中无用的动态段，减小包体积，提升加载速度。",
      icon: "🧹",
      url: "https://github.com/termux/termux-elf-cleaner",
      git: "git clone https://github.com/termux/termux-elf-cleaner"
    },
    {
      title: "Termux-",
      desc: "Termux 终端美化，提供报错翻译",
      icon: "🪟",
      url: "https://github.com/110we/Termux-",
      git: "git clone https://github.com/110we/Termux-"
    },
    {
      title: "Termux 组合技 - 文件管理神器",
      desc: "一键整理、压缩、查文件、编译、加密，Termux 全能文件管理工具",
      icon: "🛠️",
      url: "https://github.com/sky-zzh-11-25/Termux-tool",
      git: "git clone https://github.com/sky-zzh-11-25/Termux-tool"
    }
  ],
// ========项目========
  projects: [
    {
      title: "Oh My Termux",
      desc: "Termux 一键配置脚本，集成 Zsh、Neovim、Git、Zellij 等开发工具，开箱即用，让移动端编码体验接近桌面。",
      icon: "🚀",
      url: "https://github.com/air-plus/oh-my-termux",
      git: "git clone https://github.com/air-plus/oh-my-termux",
    },
    {
      title: "PRoot-Distro 发行版管理",
      desc: "无需 Root 在 Termux 中运行 Ubuntu、Debian、Alpine 等 Linux 发行版。",
      icon: "🐧",
      url: "https://github.com/termux/proot-distro",
      git: "git clone https://github.com/termux/proot-distro"
    },
    {
      title: "Termux Pacman 包管理器",
      desc: "在 Termux 中使用 Arch Linux 的 pacman 及 makepkg、repo-add 等工具。",
      icon: "📦",
      url: "https://github.com/termux-pacman/pacman-for-termux",
      git: "git clone https://github.com/termux-pacman/pacman-for-termux"
    },
    {
      title: "Termux 一键环境配置",
      desc: "自动化安装 Elixir、Go、Python、Neovim、Node.js、Tmux 等开发工具。",
      icon: "🚀",
      url: "https://github.com/yuceltoluyag/termux.dot",
      git: "git clone https://github.com/yuceltoluyag/termux.dot"
    },
    {
      title: "Termux 备份恢复 (snap)",
      desc: "Bash 脚本，支持全量备份与恢复，适用于有 root 和无 root 设备。",
      icon: "💾",
      url: "https://github.com/noob-hackers/snap",
      git: "git clone https://github.com/noob-hackers/snap"
    },
    {
      title: "Termux USB 网络共享",
      desc: "通过 USB 线在 Android 设备间共享网络（非 root），基于 gnirehtet。",
      icon: "🔗",
      url: "https://github.com/AlphaBs/termux-gnirehtet",
      git: "git clone https://github.com/AlphaBs/termux-gnirehtet"
    },
    {
      title: "Termux Discord 机器人",
      desc: "为 Discord 服务器开发的机器人，使用 Lua + Luvit + Discordia 编写。",
      icon: "🤖",
      url: "https://github.com/ravener/termux-bot",
      git: "git clone https://github.com/ravener/termux-bot"
    },
    {
      title: "T-LOAD 界面美化",
      desc: "为 Termux 提供全新界面和加载屏幕，提升终端视觉体验。",
      icon: "🖌️",
      url: "https://github.com/noob-hackers/T-LOAD",
      git: "git clone https://github.com/noob-hackers/T-LOAD"
    },
    {
      title: "Termux 登录保护",
      desc: "为 Termux 添加登录密码验证，增加设备使用安全性。",
      icon: "🔐",
      url: "https://github.com/htr-tech/termux-login",
      git: "git clone https://github.com/htr-tech/termux-login"
    },
    {
      title: "Termux Shell 美化",
      desc: "提供多种 Shell 主题、配色方案和配置模板，一键更换。",
      icon: "💻",
      url: "https://github.com/htr-tech/termux-shell",
      git: "git clone https://github.com/htr-tech/termux-shell"
    }
  ],
// ========更多资源========
  resources: [
    {
      title: "Termux",
      desc: "Android 上的 Linux 环境模拟器，无需 root 即可运行完整的命令行工具和包管理器。",
      icon: "📱",
      url: "https://github.com/termux/termux-app",
      git: "git clone https://github.com/termux/termux-app"
    },
    {
      title: "F-Droid",
      desc: "Android 上的自由开源应用商店，提供可信赖的 FOSS 应用下载与自动更新。",
      icon: "🔒",
      url: "https://f-droid.org/",
      git: "git clone https://f-droid.org/"
    }
  ]
};
