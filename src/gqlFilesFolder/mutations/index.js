const fs = require('fs');
const path = require('path');
//mutations
module.exports.echo = fs.readFileSync(path.join(__dirname, 'echo.gql'), 'utf8');
module.exports.archiveMediaRecord = fs.readFileSync(path.join(__dirname, 'archiveMediaRecord.gql'), 'utf8');
module.exports.createMediaRecord = fs.readFileSync(path.join(__dirname, 'createMediaRecord.gql'), 'utf8');
module.exports.deleteMediaRecord = fs.readFileSync(path.join(__dirname, 'deleteMediaRecord.gql'), 'utf8');
module.exports.updateMediaRecordPriority = fs.readFileSync(path.join(__dirname, 'updateMediaRecordPriority.gql'), 'utf8');
module.exports.createShop = fs.readFileSync(path.join(__dirname, 'createShop.gql'), 'utf8');
module.exports.updateShop = fs.readFileSync(path.join(__dirname, 'updateShop.gql'), 'utf8');
module.exports.updateGlobalSettings = fs.readFileSync(path.join(__dirname, 'updateGlobalSettings.gql'), 'utf8');
module.exports.updateShopSettings = fs.readFileSync(path.join(__dirname, 'updateShopSettings.gql'), 'utf8');
module.exports.retryFailedEmail = fs.readFileSync(path.join(__dirname, 'retryFailedEmail.gql'), 'utf8');
module.exports.createAddressValidationRule = fs.readFileSync(path.join(__dirname, 'createAddressValidationRule.gql'), 'utf8');
module.exports.deleteAddressValidationRule = fs.readFileSync(path.join(__dirname, 'deleteAddressValidationRule.gql'), 'utf8');
module.exports.updateAddressValidationRule = fs.readFileSync(path.join(__dirname, 'updateAddressValidationRule.gql'), 'utf8');
module.exports.verifySMTPEmailSettings = fs.readFileSync(path.join(__dirname, 'verifySMTPEmailSettings.gql'), 'utf8');
module.exports.updateTemplate = fs.readFileSync(path.join(__dirname, 'updateTemplate.gql'), 'utf8');
module.exports.addAccountAddressBookEntry = fs.readFileSync(path.join(__dirname, 'addAccountAddressBookEntry.gql'), 'utf8');
module.exports.addAccountEmailRecord = fs.readFileSync(path.join(__dirname, 'addAccountEmailRecord.gql'), 'utf8');
module.exports.createAccount = fs.readFileSync(path.join(__dirname, 'createAccount.gql'), 'utf8');
module.exports.createAccountWithoutCredentials = fs.readFileSync(path.join(__dirname, 'createAccountWithoutCredentials.gql'), 'utf8');
module.exports.removeAccountAddressBookEntry = fs.readFileSync(path.join(__dirname, 'removeAccountAddressBookEntry.gql'), 'utf8');
module.exports.removeAccountEmailRecord = fs.readFileSync(path.join(__dirname, 'removeAccountEmailRecord.gql'), 'utf8');
module.exports.sendResetAccountPasswordEmail = fs.readFileSync(path.join(__dirname, 'sendResetAccountPasswordEmail.gql'), 'utf8');
module.exports.setAccountDefaultEmail = fs.readFileSync(path.join(__dirname, 'setAccountDefaultEmail.gql'), 'utf8');
module.exports.updateAccountAddressBookEntry = fs.readFileSync(path.join(__dirname, 'updateAccountAddressBookEntry.gql'), 'utf8');
module.exports.updateAccount = fs.readFileSync(path.join(__dirname, 'updateAccount.gql'), 'utf8');
module.exports.updateGroupsForAccounts = fs.readFileSync(path.join(__dirname, 'updateGroupsForAccounts.gql'), 'utf8');
module.exports.grantAdminUIAccess = fs.readFileSync(path.join(__dirname, 'grantAdminUIAccess.gql'), 'utf8');
module.exports.revokeAdminUIAccess = fs.readFileSync(path.join(__dirname, 'revokeAdminUIAccess.gql'), 'utf8');
module.exports.updateAdminUIAccess = fs.readFileSync(path.join(__dirname, 'updateAdminUIAccess.gql'), 'utf8');
module.exports.addAccountToGroup = fs.readFileSync(path.join(__dirname, 'addAccountToGroup.gql'), 'utf8');
module.exports.createAccountGroup = fs.readFileSync(path.join(__dirname, 'createAccountGroup.gql'), 'utf8');
module.exports.removeAccountFromGroup = fs.readFileSync(path.join(__dirname, 'removeAccountFromGroup.gql'), 'utf8');
module.exports.removeAccountGroup = fs.readFileSync(path.join(__dirname, 'removeAccountGroup.gql'), 'utf8');
module.exports.updateAccountGroup = fs.readFileSync(path.join(__dirname, 'updateAccountGroup.gql'), 'utf8');
module.exports.inviteShopMember = fs.readFileSync(path.join(__dirname, 'inviteShopMember.gql'), 'utf8');
module.exports.archiveProducts = fs.readFileSync(path.join(__dirname, 'archiveProducts.gql'), 'utf8');
module.exports.archiveProductVariants = fs.readFileSync(path.join(__dirname, 'archiveProductVariants.gql'), 'utf8');
module.exports.updateProductsVisibility = fs.readFileSync(path.join(__dirname, 'updateProductsVisibility.gql'), 'utf8');
module.exports.createProduct = fs.readFileSync(path.join(__dirname, 'createProduct.gql'), 'utf8');
module.exports.createProductVariant = fs.readFileSync(path.join(__dirname, 'createProductVariant.gql'), 'utf8');
module.exports.cloneProducts = fs.readFileSync(path.join(__dirname, 'cloneProducts.gql'), 'utf8');
module.exports.cloneProductVariants = fs.readFileSync(path.join(__dirname, 'cloneProductVariants.gql'), 'utf8');
module.exports.updateProduct = fs.readFileSync(path.join(__dirname, 'updateProduct.gql'), 'utf8');
module.exports.updateProductVariant = fs.readFileSync(path.join(__dirname, 'updateProductVariant.gql'), 'utf8');
module.exports.addTagsToProducts = fs.readFileSync(path.join(__dirname, 'addTagsToProducts.gql'), 'utf8');
module.exports.removeTagsFromProducts = fs.readFileSync(path.join(__dirname, 'removeTagsFromProducts.gql'), 'utf8');
module.exports.publishProductsToCatalog = fs.readFileSync(path.join(__dirname, 'publishProductsToCatalog.gql'), 'utf8');
module.exports.addTag = fs.readFileSync(path.join(__dirname, 'addTag.gql'), 'utf8');
module.exports.removeTag = fs.readFileSync(path.join(__dirname, 'removeTag.gql'), 'utf8');
module.exports.setTagHeroMedia = fs.readFileSync(path.join(__dirname, 'setTagHeroMedia.gql'), 'utf8');
module.exports.updateTag = fs.readFileSync(path.join(__dirname, 'updateTag.gql'), 'utf8');
module.exports.updateProductVariantPrices = fs.readFileSync(path.join(__dirname, 'updateProductVariantPrices.gql'), 'utf8');
module.exports.recalculateReservedSimpleInventory = fs.readFileSync(path.join(__dirname, 'recalculateReservedSimpleInventory.gql'), 'utf8');
module.exports.updateSimpleInventory = fs.readFileSync(path.join(__dirname, 'updateSimpleInventory.gql'), 'utf8');
module.exports.addCartItems = fs.readFileSync(path.join(__dirname, 'addCartItems.gql'), 'utf8');
module.exports.createCart = fs.readFileSync(path.join(__dirname, 'createCart.gql'), 'utf8');
module.exports.reconcileCarts = fs.readFileSync(path.join(__dirname, 'reconcileCarts.gql'), 'utf8');
module.exports.removeCartItems = fs.readFileSync(path.join(__dirname, 'removeCartItems.gql'), 'utf8');
module.exports.setEmailOnAnonymousCart = fs.readFileSync(path.join(__dirname, 'setEmailOnAnonymousCart.gql'), 'utf8');
module.exports.updateCartItemsQuantity = fs.readFileSync(path.join(__dirname, 'updateCartItemsQuantity.gql'), 'utf8');
module.exports.selectFulfillmentOptionForGroup = fs.readFileSync(path.join(__dirname, 'selectFulfillmentOptionForGroup.gql'), 'utf8');
module.exports.setShippingAddressOnCart = fs.readFileSync(path.join(__dirname, 'setShippingAddressOnCart.gql'), 'utf8');
module.exports.updateFulfillmentOptionsForGroup = fs.readFileSync(path.join(__dirname, 'updateFulfillmentOptionsForGroup.gql'), 'utf8');
module.exports.addOrderFulfillmentGroup = fs.readFileSync(path.join(__dirname, 'addOrderFulfillmentGroup.gql'), 'utf8');
module.exports.cancelOrderItem = fs.readFileSync(path.join(__dirname, 'cancelOrderItem.gql'), 'utf8');
module.exports.createRefund = fs.readFileSync(path.join(__dirname, 'createRefund.gql'), 'utf8');
module.exports.moveOrderItems = fs.readFileSync(path.join(__dirname, 'moveOrderItems.gql'), 'utf8');
module.exports.placeOrder = fs.readFileSync(path.join(__dirname, 'placeOrder.gql'), 'utf8');
module.exports.splitOrderItem = fs.readFileSync(path.join(__dirname, 'splitOrderItem.gql'), 'utf8');
module.exports.updateOrder = fs.readFileSync(path.join(__dirname, 'updateOrder.gql'), 'utf8');
module.exports.updateOrderFulfillmentGroup = fs.readFileSync(path.join(__dirname, 'updateOrderFulfillmentGroup.gql'), 'utf8');
module.exports.approveOrderPayments = fs.readFileSync(path.join(__dirname, 'approveOrderPayments.gql'), 'utf8');
module.exports.captureOrderPayments = fs.readFileSync(path.join(__dirname, 'captureOrderPayments.gql'), 'utf8');
module.exports.enablePaymentMethodForShop = fs.readFileSync(path.join(__dirname, 'enablePaymentMethodForShop.gql'), 'utf8');
module.exports.createDiscountCode = fs.readFileSync(path.join(__dirname, 'createDiscountCode.gql'), 'utf8');
module.exports.updateDiscountCode = fs.readFileSync(path.join(__dirname, 'updateDiscountCode.gql'), 'utf8');
module.exports.deleteDiscountCode = fs.readFileSync(path.join(__dirname, 'deleteDiscountCode.gql'), 'utf8');
module.exports.applyDiscountCodeToCart = fs.readFileSync(path.join(__dirname, 'applyDiscountCodeToCart.gql'), 'utf8');
module.exports.removeDiscountCodeFromCart = fs.readFileSync(path.join(__dirname, 'removeDiscountCodeFromCart.gql'), 'utf8');
module.exports.createSurcharge = fs.readFileSync(path.join(__dirname, 'createSurcharge.gql'), 'utf8');
module.exports.deleteSurcharge = fs.readFileSync(path.join(__dirname, 'deleteSurcharge.gql'), 'utf8');
module.exports.updateSurcharge = fs.readFileSync(path.join(__dirname, 'updateSurcharge.gql'), 'utf8');
module.exports.createFlatRateFulfillmentMethod = fs.readFileSync(path.join(__dirname, 'createFlatRateFulfillmentMethod.gql'), 'utf8');
module.exports.updateFlatRateFulfillmentMethod = fs.readFileSync(path.join(__dirname, 'updateFlatRateFulfillmentMethod.gql'), 'utf8');
module.exports.deleteFlatRateFulfillmentMethod = fs.readFileSync(path.join(__dirname, 'deleteFlatRateFulfillmentMethod.gql'), 'utf8');
module.exports.createFlatRateFulfillmentRestriction = fs.readFileSync(path.join(__dirname, 'createFlatRateFulfillmentRestriction.gql'), 'utf8');
module.exports.deleteFlatRateFulfillmentRestriction = fs.readFileSync(path.join(__dirname, 'deleteFlatRateFulfillmentRestriction.gql'), 'utf8');
module.exports.updateFlatRateFulfillmentRestriction = fs.readFileSync(path.join(__dirname, 'updateFlatRateFulfillmentRestriction.gql'), 'utf8');
module.exports.createTaxRate = fs.readFileSync(path.join(__dirname, 'createTaxRate.gql'), 'utf8');
module.exports.updateTaxRate = fs.readFileSync(path.join(__dirname, 'updateTaxRate.gql'), 'utf8');
module.exports.deleteTaxRate = fs.readFileSync(path.join(__dirname, 'deleteTaxRate.gql'), 'utf8');
module.exports.createNavigationItem = fs.readFileSync(path.join(__dirname, 'createNavigationItem.gql'), 'utf8');
module.exports.createNavigationTree = fs.readFileSync(path.join(__dirname, 'createNavigationTree.gql'), 'utf8');
module.exports.deleteNavigationItem = fs.readFileSync(path.join(__dirname, 'deleteNavigationItem.gql'), 'utf8');
module.exports.publishNavigationChanges = fs.readFileSync(path.join(__dirname, 'publishNavigationChanges.gql'), 'utf8');
module.exports.updateNavigationItem = fs.readFileSync(path.join(__dirname, 'updateNavigationItem.gql'), 'utf8');
module.exports.updateNavigationTree = fs.readFileSync(path.join(__dirname, 'updateNavigationTree.gql'), 'utf8');
module.exports.generateSitemaps = fs.readFileSync(path.join(__dirname, 'generateSitemaps.gql'), 'utf8');
module.exports.setBillingDetailsOnCart = fs.readFileSync(path.join(__dirname, 'setBillingDetailsOnCart.gql'), 'utf8');
module.exports.setGiftNoteOnCart = fs.readFileSync(path.join(__dirname, 'setGiftNoteOnCart.gql'), 'utf8');
module.exports.updateFulfillmentTypeForGroup = fs.readFileSync(path.join(__dirname, 'updateFulfillmentTypeForGroup.gql'), 'utf8');
module.exports.setPickupDetailsOnCart = fs.readFileSync(path.join(__dirname, 'setPickupDetailsOnCart.gql'), 'utf8');
module.exports.createProductBundle = fs.readFileSync(path.join(__dirname, 'createProductBundle.gql'), 'utf8');
module.exports.addBundleItems = fs.readFileSync(path.join(__dirname, 'addBundleItems.gql'), 'utf8');
module.exports.updateProductBundle = fs.readFileSync(path.join(__dirname, 'updateProductBundle.gql'), 'utf8');
module.exports.removeBundleItems = fs.readFileSync(path.join(__dirname, 'removeBundleItems.gql'), 'utf8');
module.exports.placeDraftOrder = fs.readFileSync(path.join(__dirname, 'placeDraftOrder.gql'), 'utf8');
module.exports.createDraftOrderCart = fs.readFileSync(path.join(__dirname, 'createDraftOrderCart.gql'), 'utf8');
module.exports.addDraftOrderAccount = fs.readFileSync(path.join(__dirname, 'addDraftOrderAccount.gql'), 'utf8');
module.exports.addDraftOrderCartItems = fs.readFileSync(path.join(__dirname, 'addDraftOrderCartItems.gql'), 'utf8');
module.exports.setShippingAddressFromDraftOrder = fs.readFileSync(path.join(__dirname, 'setShippingAddressFromDraftOrder.gql'), 'utf8');
module.exports.updateFulfillmentOptionsForGroupFromDraftOrder = fs.readFileSync(path.join(__dirname, 'updateFulfillmentOptionsForGroupFromDraftOrder.gql'), 'utf8');
module.exports.placeOrderFromDraftOrder = fs.readFileSync(path.join(__dirname, 'placeOrderFromDraftOrder.gql'), 'utf8');
module.exports.updateFulfillmentTypeForGroupFromDraftOrder = fs.readFileSync(path.join(__dirname, 'updateFulfillmentTypeForGroupFromDraftOrder.gql'), 'utf8');
module.exports.selectFulfillmentOptionForGroupFromDraftOrder = fs.readFileSync(path.join(__dirname, 'selectFulfillmentOptionForGroupFromDraftOrder.gql'), 'utf8');
module.exports.updateCartItemsQuantityFromDraftOrders = fs.readFileSync(path.join(__dirname, 'updateCartItemsQuantityFromDraftOrders.gql'), 'utf8');
module.exports.updateDraftOrder = fs.readFileSync(path.join(__dirname, 'updateDraftOrder.gql'), 'utf8');
module.exports.deleteDraftOrder = fs.readFileSync(path.join(__dirname, 'deleteDraftOrder.gql'), 'utf8');
