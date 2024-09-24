import fs from "fs";
import path from "path";
//获取顶边栏
function findDeepestMarkdownFile(dir, baseDir, folderName) {
  const fullPath = path.resolve(__dirname, "../../", dir);
  let files = fs.readdirSync(fullPath);
  // 过滤掉 .DS_Store 等隐藏文件
  files = files.sort((a, b) => {
    // 提取文件名中的数字和文字部分
    const numA = parseInt(a.match(/^\d+/));
    const numB = parseInt(b.match(/^\d+/));

    // 如果都包含数字，先比较数字
    if (!isNaN(numA) && !isNaN(numB)) {
      if (numA !== numB) {
        return numA - numB;
      }
    } else if (!isNaN(numA)) {
      return -1; // 数字优先
    } else if (!isNaN(numB)) {
      return 1; // 数字优先
    }

    // 如果没有数字或者数字相等，比较文字部分的第一个字符
    return a[0].localeCompare(b[0], "zh", { sensitivity: "base" });
  });

  let deepestMarkdownFile = null;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const relativePath = path.relative(baseDir, filePath);

    if (fs.statSync(path.resolve(fullPath, file)).isDirectory()) {
      const result = findDeepestMarkdownFile(filePath, baseDir, folderName);
      if (result) {
        return result;
      }
    } else if (file.endsWith(".md")) {
      return `/${folderName}/${relativePath.replace(/\\/g, "/")}`;
    }
  }

  return deepestMarkdownFile;
}

//根据文件夹目录获取侧边栏
function getSidebarItems(dir, folderName) {
  const items = [];
  const navbarItems = [];
  const fullPath = path.resolve(__dirname, "../../", dir);

  let files = fs.readdirSync(fullPath);
  // 过滤掉 .DS_Store 等隐藏文件
  files = files.sort((a, b) => {
    const numA = parseInt(a.match(/^\d+/));
    const numB = parseInt(b.match(/^\d+/));

    if (!isNaN(numA) && !isNaN(numB)) {
      if (numA !== numB) {
        return numA - numB;
      }
    } else if (!isNaN(numA)) {
      return -1;
    } else if (!isNaN(numB)) {
      return 1;
    }

    return a[0].localeCompare(b[0], "zh", { sensitivity: "base" });
  });

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const absolutePath = path.resolve(__dirname, "../../", filePath);

    if (fs.statSync(absolutePath).isDirectory()) {
      console.log(file);
      if (file == "images") {
        return;
      }

      const deepestMarkdownFile = findDeepestMarkdownFile(
        absolutePath,
        fullPath,
        folderName
      );

      navbarItems.push({
        text: file,
        link: deepestMarkdownFile || "/",
      });

      const { items: subItems } = getSidebarItems(filePath, folderName);
      items.push({
        text: file,
        collapsible: true,
        children: subItems,
      });
    } else if (file.endsWith(".md")) {
      const fileName = path.basename(file, ".md");
      items.push({
        text: fileName,
        link: `/${filePath.replace(/\\/g, "/")}`,
      });
    }
  });

  return { items, navbarItems };
}

export { getSidebarItems };
