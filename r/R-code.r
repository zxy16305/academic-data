# CHAPTER 3: STANDARD LINEAR REGRESSION
#
# Example 1: Fuel Efficiency of Automobiles

## first we read in the data
FuelEff <- read.csv("E:/Data Mining/Chapt. 3/FuelEfficiency.csv")
FuelEff[1:6,]
plot(GPM~MPG, data=FuelEff)
plot(GPM~WT, data=FuelEff)
plot(GPM~DIS, data=FuelEff)
plot(GPM~NC, data=FuelEff)
plot(GPM~HP, data=FuelEff)
plot(GPM~ACC, data=FuelEff)
plot(GPM~ET, data=FuelEff)
FuelEff=FuelEff[, -1]
FuelEff[1:5,]


## regression on all data
m1=lm(GPM~., data=FuelEff)
summary(m1)
names(m1)
m1$coef
coef(m1)
ts.plot(m1$resid, ylim=c(-1, 1))
abline(h=0)
plot(m1$resid~m1$fitted)
m1$model[1:10,]
m1$model$WT  ### m1$model[,2]


plot(FuelEff)
cor(FuelEff)



## cross-validation (leave one out) for the model on all six regressors
n=length(FuelEff$GPM)
diff=dim(n)
percdiff=dim(n)
for (k in 1:n) {
train1=c(1:n)
train=train1[train1!=k]
## the R expression "train1[train1!=k]" picks from train1 those 
## elements that are different from k and stores those elements in the
## object train. 
## For k=1, train consists of elements that are different from 1; that 
## is 2, 3, ? n.
m1=lm(GPM~., data=FuelEff[train,])
pred=predict(m1, newdat=FuelEff[-train,])
obs=FuelEff$GPM[-train]
diff[k]=obs-pred
percdiff[k]=abs(diff[k])/obs
}
me=mean(diff)
rmse=sqrt(mean(diff**2))
mape=100*(mean(percdiff))
me   # mean error
rmse # root mean square error
mape # mean absolute percent error 

## cross-validation (leave one out) for the model on weight only
n=length(FuelEff$GPM)
diff=dim(n)
percdiff=dim(n)
for (k in 1:n) {
train1=c(1:n)
train=train1[train1!=k]
m2=lm(GPM~WT, data=FuelEff[train,])
pred=predict(m2, newdat=FuelEff[-train,])
obs=FuelEff$GPM[-train]
diff[k]=obs-pred
percdiff[k]=abs(diff[k])/obs
}
me=mean(diff)
rmse=sqrt(mean(diff**2))
mape=100*(mean(percdiff))
me   # mean error
rmse # root mean square error
mape # mean absolute percent error




Example 2: Toyota Used Car Prices

toyota <- read.csv("E:/Data Mining/Chapt. 3/ToyotaCorolla.csv")
toyota[1:3,]
summary(toyota)
hist(toyota$Price)
## next we create indicator variables for the categorical variable
## FuelType with its three nominal outcomes: CNG, Diesel, and Petrol
v1=rep(1, length(toyota$FuelType))
v2=rep(0, length(toyota$FuelType))
toyota$FuelType1=ifelse(toyota$FuelType=="CNG", v1, v2)
toyota$FuelType2=ifelse(toyota$FuelType=="Diesel", v1, v2)
auto=toyota[-4]
auto[1:3,]
plot(Price~Age, data=auto)
plot(Price~KM, data=auto)
plot(Price~HP, data=auto)
plot(Price~MetColor, data=auto)
plot(Price~Automatic, data=auto)
plot(Price~CC, data=auto)
plot(Price~Doors, data=auto)
plot(Price~Weight, data=auto)

## regression on all data
m1=lm(Price~., data=auto)
summary(m1)

set.seed(1)
## fixing the seed value for the random selection guarantees the 
## same results in repeated runs
n=length(auto$Price)
n1=1000
n2=n-n1
train=sample(1:n, n1)

## regression on training set
m1=lm(Price~., data=auto[train,])
summary(m1)
pred=predict(m1, newdat=auto[-train,])
obs=auto$Price[-train]
diff=obs-pred
percdiff=abs(diff)/obs
me=mean(diff)
rmse=sqrt(sum(diff**2)/n2)## ==diff^2
mape=100*(mean(percdiff))
me   # mean error
rmse # root mean square error
mape # mean absolute percent error 

## cross-validation (leave one out)
n=length(auto$Price)
diff=dim(n)
percdiff=dim(n)
for (k in 1:n) {
train1=c(1:n)
train=train1[train1!=k]
m1=lm(Price~., data=auto[train,])
pred=predict(m1, newdat=auto[-train,])
obs=auto$Price[-train]
diff[k]=obs-pred
percdiff[k]=abs(diff[k])/obs
}
me=mean(diff)
rmse=sqrt(mean(diff**2))
mape=100*(mean(percdiff))
me   # mean error
rmse # root mean square error
mape # mean absolute percent error 

## cross-validation (leave one out): Model with just Age
n=length(auto$Price)
diff=dim(n)
percdiff=dim(n)
for (k in 1:n) {
train1=c(1:n)
train=train1[train1!=k]
m1=lm(Price~Age, data=auto[train,])
pred=predict(m1, newdat=auto[-train,])
obs=auto$Price[-train]
diff[k]=obs-pred
percdiff[k]=abs(diff[k])/obs
}
me=mean(diff)
rmse=sqrt(mean(diff**2))
mape=100*(mean(percdiff))
me   # mean error
rmse # root mean square error
mape # mean absolute percent error 





