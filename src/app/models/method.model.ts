export interface Method {
  /** 名稱 */
  name: string;
  /** 解釋 */
  description: string;
  /** 文件連結 */
  link: string;
  /** 範例 */
  example: string;
  /** 注意事項 */
  notes?: string;
  /** 原生 */
  nativeExample?: string;
  /** 相關連結 */
  references?: Array<{
    /** 文字 */
    label?: string;
    /** 連結 */
    url: string
  }>
}
