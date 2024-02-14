// 代码块语言识别

$(function () {
  // 创建一个具有 'code_lang' 类和 '代码语言' 标题的元素，用于显示代码语言
  var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');
  // 在每个代码块的前面插入显示代码语言的元素
  $('pre').before($highlight_lang);

  // 对每个代码块执行一个函数
  $('pre').each(function () {
    // 获取当前代码块的类名，包含代码语言信息
    var code_language = $(this).attr('class');

    // 如果当前代码块没有设置类名，则跳过后续操作
    if (!code_language) {
      return true;
    };

    // 从类名中提取出实际的代码语言名称
    var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

    // 首字母大写
    lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
    
     // 在当前代码块的上方相邻的 '.code_lang' 元素中显示提取出的代码语言名称
    $(this).siblings(".code_lang").text(lang_name);
  });
});
