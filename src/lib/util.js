var dateFilter = require('./datefilter')

var cookie = require('./cookie')
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}


function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}

function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}
function timeago(time){
	if(time < 1e10){
		time = time*1000
	}
	var commentYear = (new Date(time)).getFullYear()
	var now = new Date()
	var diff = (now - time)/1000
	if(diff < 60){  
		return '刚刚'
	}else if(diff >= 60 && diff < 60*60){   
		return parseInt(diff/60) + '分钟前'
	}else if(diff >= 60*60 && diff < 24*60*60){
		return parseInt(diff/60/60) + '小时前'
	}else if(commentYear == now.getFullYear()){
		return dateFilter(time,'MM-dd')
	}else{  
		return dateFilter(time,'yyyy-MM-dd')
	}
	return dateFilter(time,'yyyy-MM-dd')

}




module.exports = {
	timeago:timeago,
	cookie:cookie
}