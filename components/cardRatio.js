import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CardRatio(props) {
  const [expense, setExpense] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [total, setTotal] = useState(0);
  const [expenseWidth, setExpenseWidth] = useState(0);
  const [revenueWidth, setRevenueWidth] = useState(0);
  function calculateWidth() {
    setTotal(expense + revenue);
    let revenuePercentage = revenue / total;
    let expensePercentage = expense / total;
    console.warn(revenuePercentage);
    console.warn(expensePercentage);
    setExpenseWidth(expensePercentage);
    setRevenueWidth(revenuePercentage);
  }
  setTimeout(() => {
    setInterval(() => {
      setRevenue(props.totalRevenue)
      setExpense(props.totalExpense)
      setTotal(revenue + expense)
      calculateWidth()
    }, 500);
  }, 2000);
  return (
    <View style={styles.wrapper}>
      <View style={styles.ratioWrapper}>
        <View style={{
          backgroundColor: 'green',
            height: '100%',
            width: revenueWidth,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5}} />
        <View style={{
          backgroundColor: 'red',
          height: '100%',
          width: expenseWidth,
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  ratioWrapper: {
    backgroundColor: '#e3e3e3',
    height: 15,
    marginTop: 10,
    width: '96%',
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },
})