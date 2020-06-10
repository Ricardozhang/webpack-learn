
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
          2,
          'always',
          [
            'ADD', // 新功能（feature）
            'FIX', // 修补bug
            'DOC', // 文档（documentation）
            'STYLE', // 格式（不影响代码运行的变动）
            'REF', // 重构（即不是新增功能，也不是修改bug的代码变动）
            'REVERT', // 回滚
            'CONFIG', // 构建过程或辅助工具的变动
            'MOD', // 其他改动
          ],
      ],
      'type-empty': [2, 'never'],
      'subject-empty': [2, 'never'],
      'type-case': [0]
    }
};
