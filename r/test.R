# Title     : TODO
# Objective : TODO
# Created by: Administrator
# Created on: 2019/11/18


toyota <- read.csv("ToyotaCorolla.csv")
# print(toyota[1:3,])
# summary(toyota)
# hist(toyota$Price)
## next we create indicator variables for the categorical variable
## FuelType with its three nominal outcomes: CNG, Diesel, and Petrol
# v1=rep(1,length(toyota$FuelType))
# v2=rep(0,length(toyota$FuelType))
# toyota$FuelType1=ifelse(toyota$FuelType=="CNG",v1,v2)
# toyota$FuelType2=ifelse(toyota$FuelType=="Diesel",v1,v2)
auto=toyota[]
print(auto)
# auto[1:3,]
# plot(Price~Age,data=auto)
# plot(Price~KM,data=auto)
# plot(Price~HP,data=auto)
# plot(Price~MetColor,data=auto)
# plot(Price~Automatic,data=auto)
# plot(Price~CC,data=auto)
# plot(Price~Doors,data=auto)
# plot(Price~Weight,data=auto)