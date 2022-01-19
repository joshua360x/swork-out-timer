export function renderRoutines(routine) {
    const routineLink = document.createElement('a');
    routineLink.href = `../routine-detail/?id=${routine.id}`;

    routineLink.textContent = routine.name;
    const routineEl = document.createElement('div');
    routineEl.classList.add('routine');
    routineEl.append(routineLink);
    return routineEl;
}


export function renderExercises(exercise) {
    const div = document.createElement('div');
    const exerciseLink = document.createElement('a');
    exerciseLink.href = `#`;
    div.classList.add('exercise-workout-list');
    
    exerciseLink.textContent = `${exercise.name} - ${exercise.duration} seconds`;

    div.append(exerciseLink);
    return div;

}