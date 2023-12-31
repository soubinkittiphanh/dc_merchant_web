export { default as BasicAlert } from '../../components/BasicAlert.vue'
export { default as CancelTicketForm } from '../../components/CancelTicketForm.vue'
export { default as CardDashBoard } from '../../components/CardDashBoard.vue'
export { default as Carousel3d } from '../../components/Carousel3d.vue'
export { default as DiaConfirm } from '../../components/DiaConfirm.vue'
export { default as DiaImage } from '../../components/DiaImage.vue'
export { default as DialogClassicMessage } from '../../components/DialogClassicMessage.vue'
export { default as ImageDialog } from '../../components/ImageDialog.vue'
export { default as LoadingIndicator } from '../../components/LoadingIndicator.vue'
export { default as MyChart } from '../../components/MyChart.vue'
export { default as NewComing } from '../../components/NewComing.vue'
export { default as Notification } from '../../components/Notification.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as OrderDetail } from '../../components/OrderDetail.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as RiderFormCopy } from '../../components/RiderForm-copy.vue'
export { default as RiderForm } from '../../components/RiderForm.vue'
export { default as Settlement } from '../../components/Settlement.vue'
export { default as SusscessDialog } from '../../components/SusscessDialog.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Wallet } from '../../components/Wallet.vue'
export { default as OrderSumaryCard } from '../../components/orderSumaryCard.vue'
export { default as DashboardCardOnTop } from '../../components/dashboard/CardOnTop.vue'
export { default as CampaignForm } from '../../components/campaign/CampaignForm.vue'
export { default as CardCampaignCard } from '../../components/card/campaignCard.vue'
export { default as CardForm } from '../../components/card/cardForm.vue'
export { default as AccountingApPayment } from '../../components/accounting/ApPayment.vue'
export { default as AccountingArReceivable } from '../../components/accounting/ArReceivable.vue'
export { default as AccountingGeneralLedgerForm } from '../../components/accounting/GeneralLedgerForm.vue'
export { default as PoForm } from '../../components/po/PoForm.vue'
export { default as ProductForm } from '../../components/product/ProductForm.vue'
export { default as ProductFormCreate } from '../../components/product/ProductFormCreate.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
