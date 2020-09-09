# Title     : TODO
# Objective : TODO
# Created by: Administrator
# Created on: 2019/12/4

data <- read.csv('efwefwefew.csv', encoding='GBK')

print(mode(data))

for (k in 1: length(data[1])) {
    data[1][k] <- substring(data[1], length(data[1])-4, length(4))
    print(k)
}

# print(data)