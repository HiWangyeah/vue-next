// slot 标志符号
export const enum SlotFlags {
  /**
   * 稳定的 slot
   * 父组件不会强制其更新
   */
  /**
   * Stable slots that only reference slot props or context state. The slot
   * can fully capture its own dependencies so when passed down the parent won't
   * need to force the child to update.
   */
  STABLE = 1,
  /**
   * 动态 slot 使用到了 scope 变量(v-for 或者 slot 之外的属性),或者有条件判断(v-for,v-if)父组件会强制 slot 更新
   */
  /**
   * Slots that reference scope variables (v-for or an outer slot prop), or
   * has conditional structure (v-if, v-for). The parent will need to force
   * the child to update because the slot does not fully capture its dependencies.
   */
  DYNAMIC = 2,
  /**
   * 被转发到子组件的 <slot />
   * 父组件是否需要更新子元素取决于父组件接收到什么 slots
   */
  /**
   * `<slot/>` being forwarded into a child component. Whether the parent needs
   * to update the child is dependent on what kind of slots the parent itself
   * received. This has to be refined at runtime, when the child's vnode
   * is being created (in `normalizeChildren`)
   */
  FORWARDED = 3
}
