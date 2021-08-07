const Course = require('../Model/Course');

class MemberController {
    getMembers(req, res, next) {
        /**
         * thao tac voi mongodb
         * -> tra ve obj
         * -> pass obj qua res.json
         *  */
        Course.find({})
            .then(courses => {
                res.json(courses)
            })
            .catch(next);
    };
    postMember(req, res, next) {
        /**
         * lay du lieu tu phai client
         * xu ly du lieu va gui len server
         * -> tra ve du lieu   
         * */
        const course = new Course(req.body);
        course.save()
            .then(() => {
                Course.find({})
                    .then(courses => {
                        res.json(courses)
                    })
                    .catch(next);
            })
            


    }
    putMember(req, res, next) {
        console.log(req.params.id)
    }
    deleteMember(req, res, next) {
        /**
         * lấy id thừ phía client
         * xử lý và gửi lên sever
         * xóa và trả lại
         */
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                Course.find({})
                    .then(courses => {
                        res.json(courses)
                    })
                    .catch(next);
            })
    }

};

module.exports = new MemberController;
