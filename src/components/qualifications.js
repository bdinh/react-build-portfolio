import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Qualifications extends Component {
  render() {

    const {
      skillSet,
      courses
    } = this.props;

    return (
      <div className='qualifications'>
        <Skills
          skillSet={skillSet}
        />
        <Courses
          courses={courses}
        />
      </div>
    );
  }
}

Qualifications.propTypes = {
  skillSet: PropTypes.array,
  courses: PropTypes.array
};


class Skills extends Component {
  render() {
    const {
      skillSet
    } = this.props;

    let skillCount = skillSet.length;
    let splitSkillSet = skillSet;
    let halfSkillCount = Math.ceil(skillCount / 2);
    splitSkillSet = splitSkillSet.splice(0, halfSkillCount);

    return (
      <div className="container">
        <div className="row skills-section">
          <div className="col-md-6 col-12 skills-content"/>
          <div className="col-md-6 col-12 skills-content">
            <h2>What Can I do?</h2>
          </div>
        </div>
        <div className="row skills-section">
          <div className="col-12 skill-title">
            <h3>Technical Skill Set</h3>
          </div>
          <SkillColumn
            skillsArray={splitSkillSet}
          />
          <SkillColumn
            skillsArray={skillSet}
          />
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skillSet: PropTypes.array
};

class SkillColumn extends Component {
  render() {
    const {
      skillsArray
    } = this.props;

    return (
      <div className={'col-md-6 col-12 skills-content'}>
        <div className="row">
          <div className="col-sm-4 col-md-6 col-6 technical-skills">
            {
              skillsArray.map((skill, i) => {
                return (
                  <p key={i}>{skill.name}</p>
                );
              })
            }
          </div>
          <div className="col">
            {
              skillsArray.map((skill, i) => {
                return (
                  <ProgressBar
                    key={i}
                    percentage={skill.proficiency}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

SkillColumn.propTypes = {
  skillsArray: PropTypes.array
};

class ProgressBar extends Component {

  render() {
    const {
      percentage
    } = this.props;

    return (
      <div className="full-bar">
        <div
          className="progress-bar"
          style={{
            width: percentage,
            height: '100%',
            backgroundColor: '#34495E'}
          }
        />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percentage: PropTypes.string
};


class Courses extends Component {
  render() {
    const {
      courses
    } = this.props;

    let courseCount = courses.length;
    let splitCourses = courses;

    let halfCourseCount = Math.ceil(courseCount / 2);
    splitCourses = splitCourses.splice(0, halfCourseCount);
    return (
      <div className="container">
        <div className="row skills-section">
          <div className="row skills-section">
            <div className="col-12 skill-title">
              <h3>Relevant Courses</h3>
            </div>
            <CourseColumn
              coursesArray={splitCourses}
            />
            <CourseColumn
              coursesArray={courses}
            />
          </div>
        </div>
      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.array
};

class Course extends Component {
  render() {

    const {
      course
    } = this.props;

    return (
      <div className="course">
        {course.name}
      </div>
    );
  }
}

Course.propTypes = {
  course: PropTypes.object
};

class CourseColumn extends Component {

  render() {
    const {
      coursesArray
    } = this.props;

    return (
      <div className="col-md-6 skills-content">
        {
          coursesArray.map((course, i) => {
            return (
              <Course
                course={course} key={i}
              />
            );
          })
        }
      </div>
    );
  }
}

CourseColumn.propTypes = {
  coursesArray: PropTypes.array,
}


