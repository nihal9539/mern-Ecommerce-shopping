import * as DashboardApi from "../api/DashboardRequest"
export const orderByMonthAction = () => async(dispatch) => {
    dispatch({ type: "MONTHLY_ORDER_DATA_START" })

    try {
       const respone =await  DashboardApi.orderByMonth()

        dispatch({ type: "MONTHLY_ORDER_DATA_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "MONTHLY_ORDER_DATA_FAIL" })
    }
}
export const revenueByMonthAction = () => async(dispatch) => {
    dispatch({ type: "MONTHLY_REVENUE_DATA_START" })

    try {
       const respone =await  DashboardApi.revenueByMonth()

        dispatch({ type: "MONTHLY_REVENUE_DATA_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "MONTHLY_REVENUE_DATA_FAIL" })
    }
}
export const topSellingProduct = () => async(dispatch) => {
    dispatch({ type: "TOP_SELLING_PRODUCT_START" })

    try {
       const respone =await  DashboardApi.getTopSellingProducts()

        dispatch({ type: "TOP_SELLING_PRODUCT_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "TOP_SELLING_PRODUCT_FAIL" })
    }
}
export const getUsersByMonth = () => async(dispatch) => {
    dispatch({ type: "MONTHLY_USER_DATA_START" })

    try {
       const respone =await  DashboardApi.monthlyUser()

        dispatch({ type: "MONTHLY_USER_DATA_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "MONTHLY_USER_DATA_FAIL" })
    }
}
export const getTotalProductCount = () => async(dispatch) => {
    dispatch({ type: "TOTAL_PRODUCT_COUNT_START" })

    try {
       const respone =await  DashboardApi.getTotalProduct()

        dispatch({ type: "TOTAL_PRODUCT_COUNT_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "TOTAL_PRODUCT_COUNT_FAIL" })
    }
}
export const revenueByCategory = () => async(dispatch) => {
    dispatch({ type: "REVENUE_CATEGORY_START" })

    try {
       const respone =await  DashboardApi.revenueByCategory()

        dispatch({ type: "REVENUE_CATEGORY_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "REVENUE_CATEGORY_FAIL" })
    }
}
export const lastTwentyDaysOrder = () => async(dispatch) => {
    dispatch({ type: "TWENTY_DAY_ORDER_FETCH_START" })

    try {
       const respone =await  DashboardApi.lastTwentyDaysOrder()

        dispatch({ type: "TWENTY_DAY_ORDER_FETCH_SUCCESS" ,data:respone.data})

    } catch (error) {
        dispatch({ type: "TWENTY_DAY_ORDER_FETCH_FAIL" })
    }
}
