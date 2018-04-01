export interface UserModel {
  userId: number, // 当前用户ID
  mobile: string, // 手机号
  nickName?: string, // 昵称
  sex?: string, // 性别
  avatar?: string, // 头像URI
  idAuthed: number, // 身份认证标识 0：未认证 1：已认证
  bankcardAuthed: number, // 银行卡认证标识 0：未认证 1：已认证
  idCardNo?: string, // 身份证号
  vip?: number, // 是否VIP 0:否 1:是
  rank?: string, // 会员等级
  rate?: number, // 无积分费率%
  rate1?: number, // 有积分费率%
  enableNoScore?: number, // 启用无积分通道 1：是 0：否
  packageDays?: number, // 套餐剩余天数（已购买才有），-1为永久有效
  creditCards?: number, // 信用卡数
  depositCards?: number, // 借记卡数
  vouchers?: number, // 抵扣券数
  balance?: number, // 返现余额（分）
  profit?: number, // 分润余额（分）
  saving?: number, // 套餐节省金额（分）
  customers?: number, // 客户总数（分）
  canTrade?: number // 是否可以刷卡取现 0：否1：是
}