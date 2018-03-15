#  洪江永交接文档

## 全美食P端

- 提现审批管理
    1. 文件名：<code>approval.vue</code>
    2. 接口：<code>/qmspromotion/cashApply/getCashApplyList</code>
    3. 剩余工作
        3.1. 数据不全（手续费、税费、到账金额、汇款时间、交易号）未返回
        3.2. 搜索不可用

- 餐厅对账明细表
    1. 文件名：<code>resdetail.vue</code>
    2. 接口<code>/qmspromotion/report/verify/shop</code>

- 客户对账明细表
    1. 文件名：<code>custdetail.vue</code>
    2. 接口：<code>/qmspromotion/report/verify/user</code>

- 支付对账明细表
    1. 文件名：<code>paydetail.vue</code>
    2. 接口：<code>/qmspromotion/report/verify/pay</code>
    3. 剩余工作
        3.1. 数据不全（商户号、交易号、到账银行、到账日期、手续费、到账金额）
        3.2. 搜索问题 创建时间、到账时间、到账银行、商户号
        3.3. 到账银行列表

- 账户余额表
    1. 文件名：<code>logs.vue</code>
    2. 接口：<code>/qmspromotion/report/account/balance</code>

- 操作日志
    1. 文件名：<code>logs.vue</code>
    2. 接口：<code>/qmsorder/report/operate</code>
    3. 剩余工作：搜索有问题（时间）

- 推广人明细
    1. 文件名：<code>obtainct.vue</code>
    2. 接口：<code>_aGetResLogs</code>

## 全美食B端(暂无问题)

- 菜品相关
    1. 文件位置 <code>\qms-b\src\pages\setting\meal</code>
    2. 接口文件位置 active --> settings
    3. 接口对接人 韩滨

- 数据相关
    1. 文件位置 <code>\qms-b\src\pages\statistic</code>
    2. 接口文件位置 active --> statistic
    3. 接口RAP位置 https://rap.meia8.com/workspace/myWorkspace.do?projectId=27#581

- 财务相关
    1. 文件位置 <code>\qms-b\src\pages\finance</code>
    2. 接口文件位置 active --> statistic
